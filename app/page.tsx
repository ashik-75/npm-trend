"use client";

import { cost } from "@/data/chat-data";
import { formatPrice } from "@/lib/helper";
import {
  Card,
  Grid,
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Metric,
  BarChart,
  LineChart,
  Subtitle,
} from "@tremor/react";

export default function Example() {
  return (
    <div className="py-10">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>
      <Grid numItemsMd={2} numItemsLg={3} className="mt-6 gap-6">
        <Card>
          <Text>Cost</Text>
          <Metric>$22,306</Metric>
          <Text className="truncate text-xs">today so far</Text>
          <BarChart
            className="mt-4 h-40"
            data={cost}
            index="date"
            categories={["cost"]}
            colors={["indigo"]}
            yAxisWidth={50}
            showXAxis={false}
            showYAxis={false}
            valueFormatter={formatPrice}
          />
        </Card>
        <Card>
          <Text>Rqeust</Text>
          <Metric>$22,306</Metric>
          <Text className="truncate text-xs">today so far</Text>
          <LineChart
            className="mt-6 h-40"
            data={cost}
            index="month"
            categories={["cost"]}
            colors={["pink", "gray"]}
            valueFormatter={formatPrice}
            yAxisWidth={40}
            showYAxis={false}
            showXAxis={false}
            curveType="natural"
          />
        </Card>
        <Card>
          <Text>Context Token</Text>
          <Metric>$22,306</Metric>
          <Text className="truncate text-xs">today so far</Text>
          <LineChart
            className="mt-6 h-40"
            data={cost}
            index="month"
            categories={["cost"]}
            colors={["amber"]}
            valueFormatter={formatPrice}
            yAxisWidth={40}
            showYAxis={false}
            showXAxis={false}
            curveType="natural"
          />
        </Card>
      </Grid>
      <div className="mt-6">
        <Card>
          <Title>Number of species threatened with extinction (2021)</Title>
          <Subtitle>
            The IUCN Red List has assessed only a small share of the total known
            species in the world.
          </Subtitle>
          <BarChart
            className="mt-6"
            data={cost}
            index="date"
            categories={["cost"]}
            colors={["blue"]}
            valueFormatter={formatPrice}
            yAxisWidth={48}
            showXAxis={true}
          />
        </Card>
      </div>
    </div>
  );
}
