import React from 'react'

function Devices({data}) {

    
if (data.length === 0)
return 'Nincs Adat'
else
    return (
        <div >
                  
                            <table border= "1">
                                   <tr> <th>Device ID</th>
                                        <th>Name</th>
                                        <th>Battery Name</th>
                                        <th>Voltrage</th>
                                        <th>Status</th>
                                    </tr>
                                     
                                            {data.map((device) => (
                                           <tr>    
                                                <td>{device.id}</td>
                                                <td>{device.name}</td>
                                                <td>{device.batteryDto.name}</td>
                                                <td>{device.batteryDto.voltage}</td>
                                                <td>{device.status}</td>
                                            </tr>
                                                                    )
                                                    )
                                            }

                            </table>
        </div>
    )
}

export default Devices
