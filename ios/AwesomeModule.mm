#import "AwesomeModule.h"

@implementation AwesomeModule
RCT_EXPORT_MODULE()

- (NSNumber *)multiply:(double)a b:(double)b {
    NSNumber *result = @(a * b);

    return result;
}

- (NSNumber *)addition:(double)a b:(double)b {
    NSNumber *result = @(a + b);

    return result;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeAwesomeModuleSpecJSI>(params);
}

@end
