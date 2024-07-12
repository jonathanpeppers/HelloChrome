console.log('document_start.js loaded!');

// These are various IDs in the page, if they ever change
// the extension would stop working and need updates.
const pr_description_label_id = '__bolt-pr-description-label';

var pr_description_label = document.getElementById(pr_description_label_id);
if (pr_description_label) {
    console.log('Found PR description label:', pr_description_label_id);

    pr_description_label.parentElement.innerHTML += '<button aria-label="Ask an AI" aria-roledescription="button" class="no-margin bolt-header-command-item-button bolt-button bolt-icon-button enabled subtle icon-only bolt-focus-treatment" id="__bolt-ask-ai" role="menuitem" type="button"><span class="fluent-icons-enabled"><span class="left-icon flex-noshrink fabric-icon .ms-Icon--Help medium"></span></span></button>';
} else {
    console.log('Did not find PR description label');
}
