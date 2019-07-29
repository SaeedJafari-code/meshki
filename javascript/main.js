window.mdc.autoInit();
const tabBar = mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));

document.getElementById('tabFeature').addEventListener('click', () => {
    document.querySelector('.section-feature-scan').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end'
    });
});

document.getElementById('tabDownload').addEventListener('click', () => {
    document.querySelector('.section-download').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end'
    });
});

document.getElementById('tabFeedback').addEventListener('click', () => {
    document.querySelector('.section-feedback').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end'
    });
});