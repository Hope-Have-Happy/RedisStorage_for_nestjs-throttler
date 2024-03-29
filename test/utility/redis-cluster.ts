import { Cluster } from 'ioredis';

export const clusterNodes = [
  { host: '127.0.0.1', port: 7000 },
  { host: '127.0.0.1', port: 7001 },
  { host: '127.0.0.1', port: 7002 },
  { host: '127.0.0.1', port: 7003 },
  { host: '127.0.0.1', port: 7004 },
  { host: '127.0.0.1', port: 7005 },
];

export const cluster = new Cluster(clusterNodes);
