module.exports = {
    concurrency: 1,
    apiKey: 'R98uzAOGpSPsn2f5RVUQ8tI4f106EZk594ulENGi6htKBs110',
    //
    browser: [
        // Add browsers with different viewports
        {width: 1200, height: 800, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1600, height: 1200, name: 'ie11'},
        {width: 1024, height: 768, name: 'edgechromium'},
        {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        //{deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    batchName: 'Ultrafast Batch'
}
