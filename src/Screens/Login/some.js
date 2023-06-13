      let {status} =await Location.requestBackgroundPermissionsAsync();
      if(status !== "granted"){
        console.log("Give permission");
        return;
      };

      let currentLocation=await Location.getCurrentPositionAsync({})
      setLocation(currentLocation);
      console.log(location)
      let loc1=location
      if(loc1){
        let latitud=loc1.coords.latitude
        let longitud=loc1.coords.longitude
        console.log(latitud)
        console.log(longitud)
        console.log(Device.brand)
        console.log(Device.deviceName)
        console.log(Device.isDevice)
        console.log(Device.designName)
        console.log(Device.osName)

      }

      

      useEffect(()=>{
        (async() =>{
          let {status}=await Location.requestForegroundPermissionsAsync()
          if(status == "granted"){
            console.log("Permisos aceptados")
    
          }
          else{
            console.log("Permisos Rechazados")
          }
          const loc =await Location.getCurrentPositionAsync()
          console.log(loc.coords.accuracy)
          setLocation(loc)
    
        })();
    
      },[])
      