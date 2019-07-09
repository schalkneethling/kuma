// @flow
import * as React from 'react';

import { gettext } from '../l10n.js';

import ContributorsIcon from '../icons/contributors.svg';

type Props = {
    contributors: Array
};

export default function Contributors(props: Props) {
    const profileBaseURL = 'https://wiki.developer.mozilla.org/profiles/';
    return (
        <section className="contributors-sub">
            <ContributorsIcon />
            <header>
                <h4>{gettext('Contributors to this page:')}</h4>
            </header>
            <ul>
                {/*
                 * TODO: These are temporarily pointing to the wiki domain,
                 * once we implement profile pages in React these contributor
                 * names should switch to point to the new profiles
                 */
                props.contributors.map((contributor, index) => (
                    <li key={contributor}>
                        {index > 0 && ', '}
                        <a
                            href={`${profileBaseURL}${contributor}`}
                            rel="nofollow"
                        >
                            {contributor}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
