import React from 'react';
import Localization from './Localization';
import Sobre from './Sobre';
import Initial from './Initial';

export default function Home() {
    return (
  
            <section>
                <Initial />
                <Sobre />
                <Localization />
            </section>

    )
}