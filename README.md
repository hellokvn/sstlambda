I created this [repository](https://github.com/hellokvn/sstlambda) without a monorepo. It works perfectly fine as long as I don't import the `uuid` package in `src/api.ts`. I've tested it with several other packages, such as `ulid`, `axios`, `lodash`, and other popular libraries, but I get the same error: `Could not resolve 'uuid'`. I've also tested this repository with both `NPM` and `PNPM`.

**Dev:**

```bash
$ pnpm install
$ pnpm run sst:dev
```

**CLI SST Logs:**

```bash
SST 3.9.19  ready!

➜  App:        sstlambda
   Stage:      kevin
   Console:    https://console.sst.dev/local/sstlambda/kevin

~  Deploy

↗  Permalink   https://sst.dev/u/3ffb620d

✓  Complete
   MyApi: https://a6cplcgsb45egwkeqmwgfgdepe0gwekc.lambda-url.ap-southeast-1.on.aws/
```

**CLI Function Logs:**

```bash
Waiting for invocations...


↗  Permalink   https://sst.dev/u/3ffb620d

✓  No changes
   MyApi: https://a6cplcgsb45egwkeqmwgfgdepe0gwekc.lambda-url.ap-southeast-1.on.aws/
// ONCE YOU OPEN THE MyApi Link
|  Build Error src/api.handler
|  ↳ Could not resolve "uuid" src/api.ts:2:19
|  Build Error src/api.handler
|  ↳ Could not resolve "uuid" src/api.ts:2:19
```

**.sst/logs/sst.log**

```bash
time=2025-03-01T21:17:49.933+07:00 level=INFO msg="checking for pulumi" path="/Users/kevin/Library/Application Support/sst/bin/pulumi"
time=2025-03-01T21:17:50.287+07:00 level=INFO msg="checking for bun" path="/Users/kevin/Library/Application Support/sst/bin/bun"
time=2025-03-01T21:17:50.301+07:00 level=INFO msg="initializing project" version=3.9.19
time=2025-03-01T21:17:50.302+07:00 level=INFO msg="esbuild building" out=/Users/kevin/Workspace/_temp/sstlambda/.sst/platform/sst.config.1740838670302.mjs
time=2025-03-01T21:17:50.327+07:00 level=INFO msg="esbuild built" outfile=/Users/kevin/Workspace/_temp/sstlambda/.sst/platform/sst.config.1740838670302.mjs
time=2025-03-01T21:17:50.327+07:00 level=INFO msg="evaluating config"
time=2025-03-01T21:17:50.371+07:00 level=INFO msg="config evaluated"
time=2025-03-01T21:17:50.372+07:00 level=INFO msg="checking platform"
time=2025-03-01T21:17:50.373+07:00 level=INFO msg="loading home"
time=2025-03-01T21:17:50.374+07:00 level=INFO msg="aws credentials found" region=ap-southeast-1 profile=""
time=2025-03-01T21:17:50.375+07:00 level=INFO msg="fetching bootstrap"
time=2025-03-01T21:17:50.553+07:00 level=INFO msg="found existing bootstrap" data="{\"version\":5,\"asset\":\"sst-asset-mufnzbtncrnh\",\"assetEcrRegistryId\":\"976193229344\",\"assetEcrUrl\":\"976193229344.dkr.ecr.ap-southeast-1.amazonaws.com/sst-asset\",\"state\":\"sst-state-mufnzbtncrnh\",\"appsyncHttp\":\"\",\"appsyncRealtime\":\"\"}"
time=2025-03-01T21:17:50.553+07:00 level=INFO msg="loaded config" app=sstlambda stage=kevin
time=2025-03-01T21:17:50.553+07:00 level=INFO msg=mosaic project=/Users/kevin/Workspace/_temp/sstlambda
time=2025-03-01T21:17:50.554+07:00 level=INFO msg="server port assigned" port=13557
time=2025-03-01T21:17:50.554+07:00 level=INFO msg="starting watcher" service=watcher root=/Users/kevin/Workspace/_temp/sstlambda
time=2025-03-01T21:17:50.555+07:00 level=INFO msg=starting service=server
time=2025-03-01T21:17:50.555+07:00 level=INFO msg="getting endpoint"
time=2025-03-01T21:17:50.555+07:00 level=INFO msg=starting service=dev
time=2025-03-01T21:17:50.555+07:00 level=INFO msg=watching service=watcher path=/Users/kevin/Workspace/_temp/sstlambda
time=2025-03-01T21:17:50.555+07:00 level=INFO msg=starting service=deployer
time=2025-03-01T21:17:50.555+07:00 level=INFO msg="waiting for trigger" service=deployer
time=2025-03-01T21:17:50.556+07:00 level=INFO msg=watching service=watcher path=/Users/kevin/Workspace/_temp/sstlambda/src
time=2025-03-01T21:17:50.556+07:00 level=INFO msg=server service=server addr=0.0.0.0:13557
time=2025-03-01T21:17:50.559+07:00 level=INFO msg=resize
time=2025-03-01T21:17:50.834+07:00 level=INFO msg=subscribed service=dev addr=[::1]:64239
time=2025-03-01T21:17:50.839+07:00 level=INFO msg=subscribed service=dev addr=[::1]:64242
time=2025-03-01T21:17:50.840+07:00 level=INFO msg="deploy requested" service=dev
time=2025-03-01T21:17:50.840+07:00 level=INFO msg=deploying service=deployer
time=2025-03-01T21:17:50.840+07:00 level=INFO msg="running stack command" service=project.run cmd=deploy
time=2025-03-01T21:17:50.840+07:00 level=INFO msg="INFO locking app=sstlambda stage=kevin"
time=2025-03-01T21:17:50.840+07:00 level=INFO msg="INFO getting data key=lock app=sstlambda stage=kevin"
time=2025-03-01T21:17:50.948+07:00 level=INFO msg="found appsync" rest=3plzcoobtvhbreqgdt65ejclni.appsync-api.ap-southeast-1.amazonaws.com realtime=3plzcoobtvhbreqgdt65ejclni.appsync-realtime-api.ap-southeast-1.amazonaws.com
time=2025-03-01T21:17:50.948+07:00 level=INFO msg="checking if appsync is ready"
time=2025-03-01T21:17:51.079+07:00 level=INFO msg="INFO connecting service=appsync.connection"
time=2025-03-01T21:17:51.218+07:00 level=INFO msg="INFO putting update app=sstlambda stage=kevin"
time=2025-03-01T21:17:51.283+07:00 level=INFO msg="INFO connect message service=appsync.connection msg=\"map[connectionTimeoutMs:300000 type:connection_ack]\""
time=2025-03-01T21:17:51.284+07:00 level=INFO msg="subscribing to" prefix=/sst/sstlambda/kevin/in
time=2025-03-01T21:17:51.284+07:00 level=INFO msg="INFO msg service=appsync.connection type=ka id=<nil>"
time=2025-03-01T21:17:51.382+07:00 level=INFO msg="INFO getting passphrase app=sstlambda stage=kevin"
time=2025-03-01T21:17:51.405+07:00 level=INFO msg="INFO msg service=appsync.connection type=subscribe_success id=0195521213b418fb8d32a20f"
time=2025-03-01T21:17:51.405+07:00 level=INFO msg="INFO subscribed service=appsync.connection channel=/sst/sstlambda/kevin/in id=0195521213b418fb8d32a20f"
time=2025-03-01T21:17:51.406+07:00 level=INFO msg=starting service=aws.task
time=2025-03-01T21:17:51.573+07:00 level=INFO msg="INFO pulling state app=sstlambda stage=kevin out=/Users/kevin/Workspace/_temp/sstlambda/.sst/pulumi/fe6aadedee0704c33ffb620d/.pulumi/stacks/sstlambda/kevin.json"
time=2025-03-01T21:17:51.905+07:00 level=INFO msg="got previous deployment" service=project.run updateID=fe6aadedee0704c33ffb620d
time=2025-03-01T21:17:51.906+07:00 level=INFO msg="esbuild building" out=/Users/kevin/Workspace/_temp/sstlambda/.sst/platform/sst.config.1740838671573.mjs
time=2025-03-01T21:17:51.956+07:00 level=INFO msg="esbuild built" outfile=/Users/kevin/Workspace/_temp/sstlambda/.sst/platform/sst.config.1740838671573.mjs
time=2025-03-01T21:17:51.960+07:00 level=INFO msg="built sst.config.ts" service=project.run updateID=fe6aadedee0704c33ffb620d to=/Users/kevin/Workspace/_temp/sstlambda/.sst/platform/sst.config.1740838671573.mjs
time=2025-03-01T21:17:51.963+07:00 level=INFO msg="tracked files" service=project.run updateID=fe6aadedee0704c33ffb620d
time=2025-03-01T21:17:51.963+07:00 level=INFO msg="INFO getting data key=secret app=sstlambda stage=_fallback"
time=2025-03-01T21:17:51.963+07:00 level=INFO msg="INFO getting data key=secret app=sstlambda stage=kevin"
time=2025-03-01T21:17:52.109+07:00 level=INFO msg="starting pulumi" service=project.run updateID=fe6aadedee0704c33ffb620d args="[/Users/kevin/Library/Application Support/sst/bin/pulumi up --yes -f --stack organization/sstlambda/kevin --non-interactive --event-log /Users/kevin/Workspace/_temp/sstlambda/.sst/pulumi/fe6aadedee0704c33ffb620d/eventlog.json --config aws:defaultTags={\"tags\":{\"sst:app\":\"sstlambda\",\"sst:stage\":\"kevin\"}} --config aws:region=ap-southeast-1]"
time=2025-03-01T21:17:57.111+07:00 level=INFO msg="INFO pushing partial state updateID=fe6aadedee0704c33ffb620d"
time=2025-03-01T21:17:57.413+07:00 level=INFO msg="rpc request" method=POST url=/rpc
time=2025-03-01T21:17:57.479+07:00 level=INFO msg="rpc request" method=POST url=/rpc
time=2025-03-01T21:17:57.483+07:00 level=INFO msg="rpc request" method=POST url=/rpc
time=2025-03-01T21:17:57.810+07:00 level=INFO msg="rpc request" method=POST url=/rpc
time=2025-03-01T21:17:57.875+07:00 level=INFO msg="INFO pushing partial state updateID=fe6aadedee0704c33ffb620d"
time=2025-03-01T21:17:57.880+07:00 level=INFO msg="pulumi exited" service=project.run updateID=fe6aadedee0704c33ffb620d err=<nil>
time=2025-03-01T21:17:57.880+07:00 level=INFO msg="eof and exited" service=project.run updateID=fe6aadedee0704c33ffb620d eofs=0
time=2025-03-01T21:17:57.880+07:00 level=INFO msg="eof and exited" service=project.run updateID=fe6aadedee0704c33ffb620d eofs=1
time=2025-03-01T21:17:57.880+07:00 level=INFO msg="breaking out of tail loop" service=project.run updateID=fe6aadedee0704c33ffb620d
time=2025-03-01T21:17:57.880+07:00 level=INFO msg="parsing state" service=project.run updateID=fe6aadedee0704c33ffb620d
time=2025-03-01T21:17:58.109+07:00 level=INFO msg="generating types" root=/Users/kevin/Workspace/_temp/sstlambda
time=2025-03-01T21:17:58.110+07:00 level=INFO msg="file event" service=watcher path=/Users/kevin/Workspace/_temp/sstlambda/sst-env.d.ts op=WRITE|CHMOD
time=2025-03-01T21:17:58.110+07:00 level=INFO msg="canceling partial" service=project.run updateID=fe6aadedee0704c33ffb620d
time=2025-03-01T21:17:58.110+07:00 level=INFO msg="waiting for partial to exit" service=project.run updateID=fe6aadedee0704c33ffb620d
time=2025-03-01T21:17:58.110+07:00 level=INFO msg="checking if code needs to be rebuilt" service=aws.function file=/Users/kevin/Workspace/_temp/sstlambda/sst-env.d.ts
time=2025-03-01T21:17:58.111+07:00 level=INFO msg="INFO pushing eventlog updateID=fe6aadedee0704c33ffb620d"
time=2025-03-01T21:17:58.111+07:00 level=INFO msg="INFO pushing snapshot updateID=fe6aadedee0704c33ffb620d"
time=2025-03-01T21:17:58.338+07:00 level=INFO msg="INFO putting update app=sstlambda stage=kevin"
time=2025-03-01T21:17:58.473+07:00 level=INFO msg="done running stack command" service=project.run updateID=fe6aadedee0704c33ffb620d
time=2025-03-01T21:17:58.476+07:00 level=INFO msg="INFO unlocking app=sstlambda stage=kevin"
time=2025-03-01T21:17:58.615+07:00 level=INFO msg="waiting for trigger" service=deployer
time=2025-03-01T21:17:58.615+07:00 level=INFO msg="build hash" service=deployer hash=s93hxrA/aMg
time=2025-03-01T21:17:58.615+07:00 level=INFO msg="waiting for trigger" service=deployer
time=2025-03-01T21:17:58.615+07:00 level=INFO msg="waiting for trigger" service=deployer
time=2025-03-01T21:17:59.360+07:00 level=INFO msg="ignoring file event" service=watcher path=/Users/kevin/Workspace/_temp/sstlambda/sst-env.d.ts op=CHMOD
time=2025-03-01T21:18:51.254+07:00 level=INFO msg="INFO msg service=appsync.connection type=ka id=<nil>"
time=2025-03-01T21:19:51.252+07:00 level=INFO msg="INFO msg service=appsync.connection type=ka id=<nil>"
time=2025-03-01T21:20:51.248+07:00 level=INFO msg="INFO msg service=appsync.connection type=ka id=<nil>"
```

#### Environment

- **OS**: macOS 14.0 (M1)
- **Node.js Version**: 22.13.1
- **PNPM Version**: 8.10.0 and 10.4.1
- **NPM Version**: 10.9.2
- **SST Version**: 3.9.19 (tested various 3.9.x versions)
