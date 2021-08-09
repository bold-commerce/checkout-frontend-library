import {pigi} from 'src/variables';

/**
 * ## getPigiFrameWindow
 * Get the contentWindow of the PIGI iFrame
 */
export function getPigiFrameWindow(): WindowProxy | null {
    const selector = `iframe#${pigi.iFrameId}`;
    const iframeElement: HTMLIFrameElement | null = document.querySelector(selector);
    if (iframeElement) {
        return iframeElement.contentWindow || null;
    }
    return null;
}
