/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as JulepApi from "../../api";
import * as core from "../../core";
export declare const JobStatusState: core.serialization.Schema<
  serializers.JobStatusState.Raw,
  JulepApi.JobStatusState
>;
export declare namespace JobStatusState {
  type Raw =
    | "pending"
    | "in_progress"
    | "retrying"
    | "succeeded"
    | "aborted"
    | "failed"
    | "unknown";
}