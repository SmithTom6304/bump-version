import * as core from "@actions/core"

import {incThrow} from "semver-ts"
import { parseBumpTypeThrow } from "./bump-type-parser";

try {
    const versionToBump = core.getInput("version");
    const bumpTypeString = core.getInput("bump-type");

    const releaseType = parseBumpTypeThrow(bumpTypeString);
    const bumpedVersion = incThrow(versionToBump, releaseType);

    core.setOutput("bumped-version", bumpedVersion);
} catch (error) {
    core.setFailed(`${(error as any)?.message ?? error}`);
}