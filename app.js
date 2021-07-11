const noble = require('@abandonware/noble');

  noble.on('stateChange', async (state) => {
    if (state === 'poweredOn') {
        console.log('Starting scanning process...');
        await noble.startScanningAsync();
    }
    else {
        await noble.stopScanningAsync();
    }
  });

  noble.on('discover', async (peripheral) => {
    console.log('A BLE device has been discovered');

    await noble.stopScanningAsync();
    console.log('Peripheral found: ');
    console.log(peripheral);

    noble.reset();
    console.log('Noble has reseted...');

    peripheral.connect((error) => {
        error ? console.log('Error connecting the device: ' + error) : 'No errors connecting';
    });

    console.log('Connect passed, now attempting to run connect event');
    
    peripheral.once('connect', (error) => {
        error ? console.log('Connection error: ' + error) : 'No errors connecting 2';
        
        try {
            console.log('Successfuly connected to BLE device!');
            
            peripheral.discoverAllServicesAndCharacteristics((error, services, characteristics) => {
                console.log('Some services and characteristics have been discovered...');

                console.log('Errors: ');
                console.log(error);
                console.log('Services: ');
                console.log(services);
                console.log('Characteristics: ');
                console.log(characteristics[0]);

                console.log('Checking a characteristic: ');
                characteristics[0].read();
                const characteristic = (characteristics[0].read())[0];
                console.log(characteristic);
            });        
        }
        catch (error) {
            peripheral.cancelConnect();
        }
    });
  });

  noble.on('warning', (message) => {console.log('Warning: ', message)});

