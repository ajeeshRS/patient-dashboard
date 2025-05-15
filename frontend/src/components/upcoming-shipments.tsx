"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ExternalLink, MapPin, Package } from "lucide-react";

const shipments = [
  {
    id: "SH-7845",
    medication: "Acme Weight Loss Rx",
    status: "In Transit",
    date: "July 10, 2023",
    trackingNumber: "TRK-9384756",
    estimatedDelivery: "July 12, 2023",
    carrier: "FedEx",
  },
  {
    id: "SH-7844",
    medication: "Acme Multivitamin",
    status: "Delivered",
    date: "June 25, 2023",
    trackingNumber: "TRK-8273645",
    estimatedDelivery: "June 27, 2023",
    carrier: "UPS",
  },
  {
    id: "SH-7843",
    medication: "Acme Weight Loss Rx",
    status: "Delivered",
    date: "June 10, 2023",
    trackingNumber: "TRK-7162534",
    estimatedDelivery: "June 12, 2023",
    carrier: "USPS",
  },
  {
    id: "SH-7842",
    medication: "Acme Multivitamin",
    status: "Delivered",
    date: "May 25, 2023",
    trackingNumber: "TRK-6051423",
    estimatedDelivery: "May 27, 2023",
    carrier: "DTDC",
  },
  {
    id: "SH-7841",
    medication: "Acme Multivitamin",
    status: "Delivered",
    date: "May 25, 2023",
    trackingNumber: "TRK-6051423",
    estimatedDelivery: "May 27, 2023",
    carrier: "DTDC",
  },
  {
    id: "SH-7840",
    medication: "Acme Multivitamin",
    status: "Delivered",
    date: "May 25, 2023",
    trackingNumber: "TRK-6051423",
    estimatedDelivery: "May 27, 2023",
    carrier: "DTDC",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-[#CCFFBE] text-[#2D8000]";
    case "In Transit":
      return "bg-[#BED9FF] text-[#015595]";
    case "Processing":
      return "bg-amber-100 text-amber-800";
    default:
      return "bg-slate-100 text-slate-800";
  }
};

interface UpcomingShipmentsProps {
  detailed?: boolean;
}

export function UpcomingShipments({
  detailed = false,
}: UpcomingShipmentsProps) {
  const [selectedShipment, setSelectedShipment] = useState(shipments[0]);

  if (!detailed) {
    return (
      <div className="space-y-4">
        {shipments.slice(0, 3).map((shipment) => (
          <div
            key={shipment.id}
            className="flex items-center justify-between p-3 border border-neutral-300 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Package className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <p className="font-medium">{shipment.medication}</p>
                <p className="text-sm text-slate-500">{shipment.date}</p>
              </div>
            </div>
            <Badge
              className={`${getStatusColor(
                shipment.status
              )} rounded-full border-none px-3 py-1`}
              variant="outline"
            >
              {shipment.status}
            </Badge>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="upcoming">
        <TabsList className="bg-[#ECECEC] h-11">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="pt-4">
          <div className="w-full flex md:flex-row flex-col items-center md:space-x-5 justify-between">
            <div className="bg-neutral-100 rounded-xl md:p-4 p-2 overflow-y-scroll md:w-1/2 w-full">
              <div className="space-y-4 overflow-y-scroll h-[400px]">
                {shipments.map((shipment) => (
                  <div
                    key={shipment.id}
                    onClick={() => setSelectedShipment(shipment)}
                    className="flex items-center justify-between p-3 border border-neutral-300 rounded-lg bg-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center">
                        <Package className="h-5 w-5 text-neutral-800" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">
                          {shipment.medication}
                        </p>
                        <p className="font-semibold text-xs">#{shipment.id}</p>
                        <p className="text-sm text-slate-500">
                          {shipment.date}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className={`${getStatusColor(
                        shipment.status
                      )} rounded-full border-none px-3 py-1`}
                      variant="outline"
                    >
                      {shipment.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-100 p-4 rounded-xl md:w-1/2 w-full">
              <h3 className="font-semibold mb-4">Shipment Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Tracking Number</p>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">
                      {selectedShipment.trackingNumber}
                    </p>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ExternalLink className="h-3 w-3" />
                      <span className="sr-only">Track shipment</span>
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Carrier</p>
                  <p className="font-medium">{selectedShipment.carrier}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Estimated Delivery</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <p className="font-medium">
                      {selectedShipment.estimatedDelivery}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Delivery Address</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-slate-500 mt-0.5" />
                    <p className="font-medium">
                      1234 Main Street
                      <br />
                      Apt 6
                      <br />
                      NYC, NY 10001
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-black text-white">
                  Track Package
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="pt-4">
          <div className="bg-neutral-100 rounded-xl md:p-4 p-2 overflow-y-scroll">
            <div className="space-y-4 overflow-y-scroll h-[400px]">
              {shipments.map((shipment) => (
                <div
                  key={shipment.id}
                  onClick={() => setSelectedShipment(shipment)}
                  className="flex items-center justify-between p-3 border border-neutral-300 rounded-lg bg-white"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-neutral-200 flex items-center justify-center">
                      <Package className="h-5 w-5 text-neutral-800" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">{shipment.medication}</p>
                      <p className="font-semibold text-xs">#{shipment.id}</p>
                      <p className="text-sm text-slate-500">{shipment.date}</p>
                    </div>
                  </div>
                  <Badge
                    className={`${getStatusColor(
                      shipment.status
                    )} rounded-full border-none px-3 py-1`}
                    variant="outline"
                  >
                    {shipment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
          {/* <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Medication</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Tracking</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium">{shipment.id}</TableCell>
                  <TableCell>{shipment.medication}</TableCell>
                  <TableCell>
                    <Badge
                      className={getStatusColor(shipment.status)}
                      variant="outline"
                    >
                      <span className="flex items-center gap-1">
                        {getStatusIcon(shipment.status)}
                        {shipment.status}
                      </span>
                    </Badge>
                  </TableCell>
                  <TableCell>{shipment.date}</TableCell>
                  <TableCell className="font-mono text-xs">
                    {shipment.trackingNumber}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Track
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
