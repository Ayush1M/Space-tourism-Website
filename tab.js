const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role= "tab"]')


tabs.forEach((tab) =>{
    tab.addEventListener("click", changeTabPanel)
})

function changeTabPanel(e){
    const targetTab = e.target
    const targetPanel = targetTab.getAttribute("aria-controls")
    const targetImage = targetTab.getAttribute("data-image")

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false)
    targetTab.setAttribute("aria-selected", true)

    hideContent(mainContainer, 'article')
    showContent(mainContainer, [`#${targetPanel}`])
     
    hideContent(mainContainer, 'picture')
    showContent(mainContainer, [`#${targetImage}`])
}

function hideContent(parent, content){
    parent.querySelectorAll(content).forEach((item) => item.setAttribute("hidden", true))
}

function showContent(parent, content){
    parent.querySelector(content).removeAttribute('hidden');
}
