import { ReleaseType } from "semver-ts";

export enum BumpType {
    Major,
    Minor,
    Patch
}

export function parseBumpTypeThrow(value: string) : ReleaseType {
    switch (value.toLocaleLowerCase()) {
        case 'major': return 'major';
        case 'minor': return 'minor';
        case 'patch': return 'patch';
        default: throw(`Unexpected bump type '${value}'`);
    }
}