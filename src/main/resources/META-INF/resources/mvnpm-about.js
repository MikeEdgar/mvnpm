import { LitElement, html, css} from 'lit';

/**
 * This component shows the About screen
 */
 export class MvnpmAbout extends LitElement {

    static styles = css`
    `;

    static properties = {
      
    };

    constructor() {
        super();
        
    }

    render() {
        return html`Hello About !`;
    }
    
 }
 customElements.define('mvnpm-about', MvnpmAbout);