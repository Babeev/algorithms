function huffman(str) {
  const freqs = text => {
    return [...text]
      .reduce((fs, c) => fs[c] ? (fs[c] = fs[c] + 1, fs) : (fs[c] = 1, fs), {})
  }
  
  const topairs = freqs => Object.keys(freqs).map(c => [c, freqs[c]])

  const sortps = pairs => pairs.sort((a, b) => a[1] - b[1])

  const tree = ps => ps.length < 2 ? ps[0] : tree(sortps([[ps.slice(0, 2), ps[0][1] + ps[1][1]]].concat(ps.slice(2))))

  const codes = (tree, pfx = "") => tree[0] instanceof Array ? Object.assign(codes(tree[0][0], pfx + "0"), codes(tree[0][1], pfx + "1")) : {[tree[0]]: pfx}

  const bb = codes(tree(sortps(topairs(freqs(str)))))

  let encodedStr = ''
  for (let i = 0; i < str.length; i++) {
      const char = str[i]
      const code = bb[char]
      encodedStr += code
  }
  return { codes:bb, encodedStr }
}