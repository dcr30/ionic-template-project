# Ionic template
## Building:
1. Open terminal window.
2. Clone the repo: `git clone https://github.com/dcr30/ionic-template-project.git`
3. Navigate to repo folder: `cd ionic-template-project`
4. Get dependencies: `npm install`
5. Run gulp: `gulp serve`

After that, application could be accesed by navigating to `http://localhost:8100`

## Building for iOS
Before everything is done, execute `gulp` command in repo root.

In project folder: 

1. Add platform: `ionic platform ios`
2. Build: `ionic build ios`
3. Run in emulator: `ionic emulate` 

If something is wrong, there is possible workaround:

1. Remove platform: `ionic remove platform ios`
2. Add hooks: `ionic hooks add`
3. Add platform again `ionic platform ios`
4. Buid: `ionic build ios`

To run on device:

1. Open XCode project: `open platforms/ios/ionic-boilerplate.xcodeproj`
2. Add developer profile in project setting (this is needed only to test on real device)
3. Save project and close XCode
5. Unlock your device
4. Run build on device: `ionic run ios --device`