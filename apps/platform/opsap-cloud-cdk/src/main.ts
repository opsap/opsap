import { App } from 'aws-cdk-lib';
import { AppStack } from './stacks/app-stack';
import { AmplifyStack } from './stacks/amplify-stack';
import { LogbookStack } from './stacks/logbook-stack';
import { UserStack } from './stacks/user-stack';

const app = new App();

// stacks aka microservices or service grouping
new AppStack(app, 'opsap-cloud-cdk');
new AmplifyStack(app, 'opsap-amplify-stack');
new LogbookStack(app, 'opsap-logbook-stack');
new UserStack(app, 'opsap-user-stack');
