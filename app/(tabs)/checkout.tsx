import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

type JuspayCheckoutPayload = {
  requestId: string;
  service: string;
  payload: {
    clientId: string;
    amount: string;
    merchantId: string;
    clientAuthToken: string;
    clientAuthTokenExpiry: string;
    environment: string;
    action: string;
    customerId: string;
    currency: string;
    customerPhone: string;
    customerEmail: string;
    orderId: string;
  };
};

const Checkout = () => {
  const [processPayload, setProcessPayload] = useState<JuspayCheckoutPayload>(
    {} as JuspayCheckoutPayload
  );

  useEffect(() => {
    setProcessPayload({
      requestId: "dbba45aaf8dc408da474b7943b9e1d9f",
      service: "in.juspay.hyperpay",
      payload: {
        clientId: "supertails",
        amount: "10.0",
        merchantId: "supertails",
        clientAuthToken: "tkn_adbf808e1d2b4d95b41144d0960b5a7e",
        clientAuthTokenExpiry: "2022-01-24T17:40:22Z",
        environment: "production",
        action: "paymentPage",
        customerId: "2345",
        currency: "INR",
        customerPhone: "9876543210",
        customerEmail: "customer@gmail.com",
        orderId: "1234",
      },
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>Checkout screen</Text>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({});
