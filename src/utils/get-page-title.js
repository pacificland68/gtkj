import defaultSettings from '@/settings'

const title = defaultSettings.title || '深圳市国土空间基础信息平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
