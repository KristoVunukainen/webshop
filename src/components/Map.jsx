import L from 'leaflet';
		import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
		import icon from 'leaflet/dist/images/marker-icon.png';
		import iconShadow from 'leaflet/dist/images/marker-shadow.png';
		import ChangeView from './ChangeView';
		let DefaultIcon = L.icon({
		  iconUrl: icon,
		  shadowUrl: iconShadow,
		  iconSize: [25,41], 
		  iconAnchor: [12,41],
		  popupAnchor: [2, -40],
		});
		L.Marker.prototype.options.icon = DefaultIcon;
		

		function Map(props) { 
		

		  return (
		  <div>
		

		    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
		      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
		      <TileLayer
		        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

		        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

		      />
		      <Marker position={[59.42075469393771, 24.793427043333118]}>
		        <Popup>
		          Ülemiste keskus. <br /> Avatud 9-20
		        </Popup>
		      </Marker>
		      <Marker position={[59.4263824056476, 24.725840196164082]}>
		        <Popup>
		          Kristiine keskus. <br /> Avatud 10-21
		        </Popup>
		      </Marker>
              <Marker position={[58.37759248384809, 26.730333207001966]}>
		        <Popup>
		          Tasku keskus <br /> Avatud 10-21 <br />
                  <a target='blank' rel='noreferrer' href='https://www.google.com/maps/place/Tasku/@58.3778156,26.7302136,19.08z/data=!4m
                  14!1m7!3m6!1s0x46eb36de8f30aa61:0xac1894becb0a4ccc!2sTasku!8m2!3d58.3778901!4d26.7308525!16s%
                  2Fg%2F125_j5pv_!3m5!1s0x46eb36de8f30aa61:0xac1894becb0a4ccc!8m2!3d58.3778901!4d26.7308525!16s%2Fg%2F125_j5pv_?entry=ttu'>Turu tn 2</a>
		        </Popup>
		      </Marker>
		    </MapContainer>
		  </div>)
		}
		

		export default Map; 
