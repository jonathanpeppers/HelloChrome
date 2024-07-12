console.log('document_idle.js loaded!');

// New button we add dynamically
const ai_button_id = '__bolt-ask-ai';

// These are various IDs in the page, if they ever change
// the extension would stop working and need updates.
const pr_description_label_id = '__bolt-pr-description-label';
const pr_description_textarea_id = '__bolt-textfield-input-2';

// These are also names that if AzDO changes, would break
const source_branch_name = 'sourceRef';
const target_branch_name = 'targetRef';
const source_repo_name = 'sourceRepositoryId';
const target_repo_name = 'targetRepositoryId';

// Wait 1 second for the page to load, then attach to it
setTimeout(attachToPage, 1000);

function attachToPage() {
    var pr_description_label = getElementAndLog(pr_description_label_id);
    var pr_description_textarea = getElementAndLog(pr_description_textarea_id);

    if (pr_description_label && pr_description_textarea) {
        pr_description_label.parentElement.innerHTML += `<button aria-label="Ask an AI" aria-roledescription="button" class="no-margin bolt-header-command-item-button bolt-button bolt-icon-button enabled subtle icon-only bolt-focus-treatment" id="${ai_button_id}" role="menuitem" type="button">Ask an AI</button>`;

        var ask_ai_button = getElementAndLog(ai_button_id);
        ask_ai_button.onclick = function() {
            console.log('Ask an AI button clicked!');

            const params = new URLSearchParams(window.location.search);
            const source_branch = params.get(source_branch_name);
            const target_branch = params.get(target_branch_name);
            const source_repo = params.get(source_repo_name);
            const target_repo = params.get(target_repo_name);

            pr_description_textarea.focus();
            pr_description_textarea.value +=
                '\nAI was here, we could send a payload such as:\n' +
                `{ "source_branch": "${source_branch}", "target_branch": "${target_branch}", "source_repo": "${source_repo}", "target_repo": "${target_repo}" }`;
        };
    }
}

function getElementAndLog(id) {
    var element = document.getElementById(id);
    if (element) {
        console.log('Found element:', id);
    } else {
        console.log('Did *not* find element:', id);
    }
    return element;
}
