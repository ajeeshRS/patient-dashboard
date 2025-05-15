import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardHeader } from "@/components/dashboard-header";
import { WeightChart } from "@/components/weight-chart";
import { UpcomingShipments } from "@/components/upcoming-shipments";
import { HealthMetrics } from "@/components/health-metrics";

export default function Page() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-[#ECECEC] h-11">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="weight">Weight Progress</TabsTrigger>
          <TabsTrigger value="shipments">Shipment Details</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <HealthMetrics />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border border-neutral-300">
              <CardHeader>
                <CardTitle className="font-bold text-2xl">Weight Progress</CardTitle>
                <CardDescription>
                  Your 30-day weight loss journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WeightChart />
              </CardContent>
            </Card>

            <Card className="border border-neutral-300">
              <CardHeader>
                <CardTitle className="font-bold text-2xl">Upcoming Shipments</CardTitle>
                <CardDescription>
                  Your next medication deliveries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingShipments />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weight">
          <Card className="border border-neutral-300">
            <CardHeader>
              <CardTitle className="font-bold text-2xl">Weight Progress Details</CardTitle>
              <CardDescription>
                Detailed view of your weight loss journey
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <WeightChart detailed />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipments">
          <Card className="border border-neutral-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Shipment History & Tracking</CardTitle>
              <CardDescription>
                All your medication shipments and delivery status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingShipments detailed />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
