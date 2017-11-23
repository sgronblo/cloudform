/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface LifecycleHookProperties {
    AutoScalingGroupName: Value<string>
    DefaultResult?: Value<string>
    HeartbeatTimeout?: Value<number>
    LifecycleHookName?: Value<string>
    LifecycleTransition: Value<string>
    NotificationMetadata?: Value<string>
    NotificationTargetARN?: Value<string>
    RoleARN?: Value<string>
}

export default class LifecycleHook extends ResourceBase {
    constructor(properties: LifecycleHookProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::AutoScaling::LifecycleHook', properties, dependsOn)
    }
}