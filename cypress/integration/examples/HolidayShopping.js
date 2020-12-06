describe("Holiday Shopping", () => {

    before(() => {
        //cy.visit('https://demo.applitools.com/tlcHackathonMasterV1.html');
        cy.visit('https://demo.applitools.com/tlcHackathonDev.html');
        // cy.visit('https://demo.applitools.com/tlcHackathonMasterV2.html');
    })

     it(`Test 1`, function () {
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion',
            batchId: 'Holiday Shopping',
            batchName: 'Holiday Shopping',
            testName: 'Test 1',
            stepName: "main page",
            browser: [
                //{ width: 1200, height: 800, name: 'firefox' },
                { width: 1200, height: 800, name: 'chrome' }
                //{ width: 1200, height: 800, name: 'edgechromium' },
                //{ width: 1200, height: 800, name: 'safari' }
                //{ deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' }
            ]
        })

        // Check the main page of the app by using Applitools Eyes to take a screenshot of the entire page.
        cy.eyesCheckWindow({
            tag: "main page",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

    it(`Test 2`, function () {
        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion',
            batchId: 'Holiday Shopping',
            batchName: 'Holiday Shopping',
            testName: 'Test 2',
            stepName: "filter by color",
            browser: [
                //{ width: 1200, height: 800, name: 'firefox' },
                { width: 1200, height: 800, name: 'chrome' }
                //{ width: 1200, height: 800, name: 'edgechromium' },
                //{ width: 1200, height: 800, name: 'safari' }
                //{ deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' }
            ]
        })

        cy.get('#colors__Black').check();
        cy.get('#filterBtn').click();
        // Check the main page of the app by using Applitools Eyes to take a screenshot of the entire page.
        cy.eyesCheckWindow({
            target: 'region',
            selector: '#product_grid'
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

    it(`Test 3`, function () {
         // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'AppliFashion',
            batchId: 'Holiday Shopping',
            batchName: 'Holiday Shopping',
            testName: 'Test 3',
            stepName: "product details",
            browser: [
                //{ width: 1200, height: 800, name: 'firefox' },
                { width: 1200, height: 800, name: 'chrome' }
                //{ width: 1200, height: 800, name: 'edgechromium' },
                //{ width: 1200, height: 800, name: 'safari' }
                //{ deviceName: 'iPhone X', screenOrientation: 'landscape', name: 'chrome' }
            ]
        })


        cy.get('#IMG__imgfluid__215').click();
        cy.eyesCheckWindow({
            tag: "main page",
            target: 'window',
            fully: true
        });
        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});