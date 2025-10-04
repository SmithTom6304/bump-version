# Bump Version JavaScript action

This action bumps a provided [SemVer](https://semver.org/) string to a new major, minor, or patch version.

## Inputs

### `version`

**Required** The SemVer string to bump.

### `bump-type`

**Required** The bump type. Can be major, minor, or patch.

## Outputs

### `bumped-version`

The bumped SemVer string.

## Example usage

```yaml
uses: SmithTom6304/bump-version@v1
with:
  version: 2.3.4
  bump-type: minor
```
