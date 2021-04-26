function BFS(root, value) {
  if (!root || !value) {
    throw Error('empty')
  }
  const queue = [root]

  while (queue.length) {
    const node = queue.shift()

    if (node.value === value) {
      return node
    } else {
      queue.push(...node.children)
    }
  }

  return undefined
}
