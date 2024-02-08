//

import * as FileSystem from 'expo-file-system';

import data from './../../data/data.json';

const path = FileSystem.documentDirectory + 'data.json';

class DataController {
  static async start() {
    const { exists } = await FileSystem.getInfoAsync(path);

    if (!exists) {
      FileSystem.writeAsStringAsync(path, JSON.stringify(data));
    }
  }

  static async read() {
    return await FileSystem.readAsStringAsync(path);
  }

  static async write(contents: string) {
    await FileSystem.writeAsStringAsync(path, contents);
  }

  static async clear() {
    const { exists } = await FileSystem.getInfoAsync(path);

    if (exists) {
      FileSystem.deleteAsync(path);
    }
  }
}

export { DataController };
