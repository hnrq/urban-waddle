const now = new Date();

export default {
  1: {
    id: '1',
      title: 'New todo 1',
      dueTo: now.setDate(now.getDate() + 10),
      creationDate: now.setDate(now.getDate() - 5),
      done: true
  },
  2: {
    id: '2',
    title: 'Todo 2, we\'ll do it',
    dueTo: now.setDate(now.getDate() + 6),
    creationDate: now.setDate(now.getDate() - 10),
    done: false
  },
  3: {
    id: '3',
    title: 'Giving up',
    dueTo: now.setDate(now.getDate() + 2),
    creationDate: now.setDate(now.getDate() - 7),
    done: false
  },
  4: {
    id: '4',
    title: 'eopitmane',
    dueTo: now.setDate(now.getDate() + 8),
    creationDate: now.setDate(now.getDate() - 20),
    done: true
  },
  5: {
    id: '5',
    title: 'Dotinha',
    dueTo: now.setDate(now.getDate() + 16),
    creationDate: now.setDate(now.getDate() - 90),
    done: false
  },
  6: {
    id: '6',
    title: 'Who cares',
    dueTo: now.setDate(now.getDate() + 365),
    creationDate: now.setDate(now.getDate() - 1000),
    done: false
  },
};