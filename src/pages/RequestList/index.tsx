import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ButtonComponent, Screen, Divider} from "../../components";
import theme from "../../assets/theme";
import {RequestCardComponent, RequestCardActiveComponent, HeaderComponent} from "../../components"
import { Background, SectionTitle, ButtonContainer } from "./style";
import axios from 'axios';
var order_order_status:string;
var order_start_date: string;
var order_end_date: string;
var order_description:string;
var orders;
const RequestList: React.FC = () =>
{
  const [order_status, setOrderStatus] = React.useState([]);
  const [start_date, setStartDate] = React.useState([]);
  const [end_date, setEndDate] = React.useState([]);
  const [numberOrders, setNumberOrders] = React.useState(0);
  const [description, setDescription] = React.useState([])
  const [Passed, setPassed] = React.useState(false);
  (!Passed &&  axios.get('http://192.168.5.207:3001/order/list')
    .then(res => {
       orders = res.data;
       setOrderStatus([]);
       setStartDate([]);
       setEndDate([]);
       setDescription([]);
       setNumberOrders(orders.length);
       if(numberOrders>0){
        setPassed(true)
       }
       console.log(numberOrders)
       for(let i=0;i<numberOrders;i++){
         order_order_status = orders[i].order_status;
         order_start_date = orders[i].start_date;
         order_end_date = orders[i].end_date;
         order_description= orders[i].description
         console.log(order_start_date,order_end_date);
         setOrderStatus(os=>[...os, order_order_status]);
         setStartDate(sd=>[...sd, order_start_date]);
         setEndDate(ed=>[...ed, order_end_date]);
         setDescription(d=>[...d, order_description]);
        }
     }))
 
return(
  <Screen>
    <Background>
      <SectionTitle>Em aberto</SectionTitle>
      <View style={{ height: 230, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {[...Array(numberOrders)].map((prop, index) => 
          (
            (String(order_status[index]) == "opened" && 
            <RequestCardActiveComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date(String(start_date[index]))}
            endDate={new Date(String(end_date[index]))}
            description={String(description[index])}
            />)
          ))}
        </ScrollView>
        
      </View>
      <Divider />
      <SectionTitle>Histórico</SectionTitle>
      <View style={{marginTop: 20}}>
        <ScrollView>
        {[...Array(numberOrders)].map((prop, index) => 
          (
            (String(order_status[index]) == "finished" && 
            <RequestCardComponent
            userName={"Liz Andrade"}
            stars={5}
            userLocation={"Casa Amarela"}
            startDate={new Date(String(start_date[index]))}
            endDate={new Date(String(end_date[index]))}
            finished={"Encerrado"}
            />)
          ))}
        </ScrollView>
      </View>
      
    </Background>
  </Screen>
);
};

export default RequestList;
