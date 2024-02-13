//

import * as FileSystem from 'expo-file-system';

import data from './../../data/data.json';

const path = FileSystem.documentDirectory + 'data.json';

class DataController {
  static async start(force = false) {
    const { exists } = await FileSystem.getInfoAsync(path);

    if (!exists || (exists && force)) {
      FileSystem.writeAsStringAsync(path, JSON.stringify(data));
    }
  }

  static async read<T = any>(key: string) {
    let contents = await FileSystem.readAsStringAsync(path);

    contents = JSON.parse(contents);

    return contents[key] as T;
  }

  static async write<T>(key: string, data: T) {
    let contents = await FileSystem.readAsStringAsync(path);

    contents = JSON.parse(contents);

    contents[key] = data;

    contents = JSON.stringify(contents);

    await FileSystem.writeAsStringAsync(path, contents);
  }

  static async clear(key: string) {
    let contents = await FileSystem.readAsStringAsync(path);

    contents = JSON.parse(contents);

    contents[key] = null;

    contents = JSON.stringify(contents);

    await FileSystem.writeAsStringAsync(path, contents);
  }
}

export { DataController };
