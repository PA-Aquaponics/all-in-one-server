import {Sensor} from "../api/v1";

export function mapSensorsByPredicate(sensors: Sensor[], predicate: (sensor: Sensor) => string): Map<string, Sensor[]> {
  const map = new Map<string, Sensor[]>();
  sensors.forEach(sensor => {
    const key = predicate(sensor);
    if (key) {
      const collection = map.get(key);
      if (collection) {
        collection.push(sensor);
      } else {
        map.set(key, [sensor]);
      }
    }
  });
  return map;
}
