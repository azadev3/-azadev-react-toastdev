declare module '*.mp3' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGGElement>>;
    const src: string;
    export default src;
}