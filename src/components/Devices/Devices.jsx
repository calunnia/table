import React from 'react'

function Devices({data}) {

    if (data.lenght === 0)
    return ('No data')
    else
    return (
        <div>
           <table border = "1">

               <tr>
               <th>Device ID</th>
               <th>Name</th>
               <th>Battery Name</th>
               <th>Voltage</th>
               <th>Status</th>
               </tr>
               
               { data.map( (device) => {
                            return <tr>      
                                    <td>{device.id}</td>
                                    <td>{device.name}</td>
                                    <td>{device.batteryDto.name}</td>
                                    <td>{device.batteryDto.voltage}</td>
                                    <td>{device.status}</td>
                            </tr>
                           
               }      
                                        
                         )              
               }
               
               </table> 
        </div>
    )
}

export default Devices
