import { CONFIG } from './config'

export const VALIDGUESSES = [
  'danèè',
  'gudha',
  'uwzha',
  'zhikè',
  'ayeja',
  'huyaa',
  'ddaka',
  'ddawi',
  'zhikè',
  'kihna',
  'ahiyu',
  'akida',
  'akiya',
  'ddaan',
  'dduki',
  'dduwè',
  ]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
