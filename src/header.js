import './style.css'
import wgaf from './images/WGAF.png'
import qhh from './images/QHHBLACK.png'

const headerItem = document.querySelector('#Header')

if (!headerItem) {
  throw new Error('Header element not found')
}

const pageType = headerItem.dataset.pageType
const logoSrc = pageType === 'wgaf' ? wgaf : qhh
const logoAlt = pageType === 'wgaf' ? 'WGAF logo' : 'Quality Homes For Human Kind logo'

headerItem.innerHTML = `
  <div class="header-container flex items-center justify-center p-4">
    <img src="${logoSrc}" class="h-12 logo" alt="${logoAlt}" />
  </div>
`
