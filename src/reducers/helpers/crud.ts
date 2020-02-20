import { timeout } from '../helpers';
import { cachedStorage } from './storage';
import { uuid } from 'uuidv4';

interface BaseItem {
  id?: string;
}

export const crud = <ItemType extends BaseItem>(storageKey: string) => {
  interface StorageItems {
    [k: string]: ItemType;
  }
  interface Storage {
    items: StorageItems;
    keys: string[];
  }
  const storage = cachedStorage<Storage>(
    storageKey,
    JSON.stringify({
      items: {},
      keys: [],
    }),
  );

  const getItems = async (): Promise<ItemType[]> => {
    // await timeout(1000);
    const { items, keys } = storage.get();
    return keys.map(k => items[k]);
  };

  const createItems = async (newItems: ItemType[]): Promise<ItemType[]> => {
    await timeout(1000);
    const { keys, items } = storage.get();
    const _items = newItems.map(item => ({ ...item, id: uuid() }));
    const _newItems = _items.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});
    const _itemsStorage = {
      keys: [...keys, ...Object.keys(_newItems)],
      items: { ...items, ..._newItems },
    };
    storage.set(_itemsStorage);
    return _items;
  };

  const updateItems = async (updatedItems: ItemType[]): Promise<ItemType[]> => {
    await timeout(1000);
    const { keys, items } = storage.get();

    const _items = updatedItems.reduce((acc, item) => ({ ...acc, [item.id || '']: item }), {});

    const _itemsStorage = {
      keys,
      items: { ...items, ..._items },
    };

    storage.set(_itemsStorage);

    return updatedItems;
  };

  const deleteItems = async (ids: string[]): Promise<ItemType[]> => {
    await timeout(1000);
    const { keys, items } = storage.get();

    const deletedItems = ids.map(id => items[id]);
    const _keys = keys.filter(k => !ids.includes(k));
    const _items = _keys.reduce((acc, k) => ({ ...acc, [k]: items[k] }), {});

    const _itemsStorage = {
      keys,
      items: _items,
    };

    storage.set(_itemsStorage);

    return deletedItems;
  };

  return {
    getItems,
    createItems,
    updateItems,
    deleteItems,
  };
};
