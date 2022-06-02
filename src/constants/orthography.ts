import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'd',
  'a',
  'n',
  'è',
  'g',
  'u',
  'h',
  'w',
  'z',
  'i', 
  'k',
  'y', 
  'e',
  'j',
  ]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
