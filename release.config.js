module.exports = {
    'plugins': [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', {
            'changelogFile': 'CHANGELOG.md',
        }],
        '@semantic-release/github',
        ['@semantic-release/git', {
            'assets': [
                'CHANGELOG.md',
            ],
            // eslint-disable-next-line no-template-curly-in-string
            'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        }],
    ],
}
