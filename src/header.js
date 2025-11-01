import './style.css'
import wgaf from './images/WGAF.png'
import qhh from './images/QHH.png'

const headerItem = document.querySelector('#Header')

if (headerItem.dataset.pageType == "qhh") {
  headerItem.innerHTML = `
    <header>
      <img src="${qhh}" class="h-12 logo" alt="Vite logo"/>
    </header>
  `
} else if(headerItem.dataset.pageType == "wgaf"){
  headerItem.innerHTML = `
    <header>
      <img src="${wgaf}" class="h-12 logo" alt="Vite logo"/>
    </header>
  `
}
setupCounter(document.querySelector('#counter'))