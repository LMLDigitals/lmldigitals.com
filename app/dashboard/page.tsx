"use client";
import Chart from "react-apexcharts";

const primary = "#3B82F6";
const neutral = "#D1D5DB";

export default function Dashboard() {
  return (
    <div id="webcrumbs">
      <main className="p-6 flex flex-col gap-8 w-full">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 flex flex-col items-center">
        <p className="text-neutral-950 dark:text-neutral-50 text-lg mb-2">Total Sales</p>
        <Chart
          type="bar"
          series={[{ name: "Sales", data: [10, 20, 30, 40] }]}
          width="100%"
          height={200}
          options={{
          chart: { toolbar: { show: false } },
          colors: [primary],
          }}
        />
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 flex flex-col items-center">
        <p className="text-neutral-950 dark:text-neutral-50 text-lg mb-2">Website Traffic</p>
        <Chart
          type="line"
          series={[{ name: "Traffic", data: [15, 25, 35, 45] }]}
          width="100%"
          height={200}
          options={{
          chart: { toolbar: { show: false } },
          colors: [neutral],
          }}
        />
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 flex flex-col items-center">
        <p className="text-neutral-950 dark:text-neutral-50 text-lg mb-2">Revenue</p>
        <Chart
          type="donut"
          series={[30, 40, 30]}
          width="100%"
          height={200}
          options={{
          chart: { toolbar: { show: false } },
          colors: [primary, neutral, primary],
          }}
        />
        </div>
      </section>
      <section className="relative">
        <details className="relative z-10">
        <summary className="cursor-pointer text-neutral-950 dark:text-neutral-50 font-semibold">
          Expand for Detailed Metrics
        </summary>
        <div className="absolute bg-neutral-50 dark:bg-neutral-900 shadow-md p-4 mt-2 rounded-md">
          <table className="w-full text-neutral-950 dark:text-neutral-50">
          <thead className="bg-neutral-200 dark:bg-neutral-700">
            <tr>
            <th className="p-2 text-left">Metric</th>
            <th className="p-2 text-left">Value</th>
            <th className="p-2 text-left">Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="p-2">Conversions</td>
            <td className="p-2">75%</td>
            <td className="p-2">+5%</td>
            </tr>
            <tr>
            <td className="p-2">Bounce Rate</td>
            <td className="p-2">35%</td>
            <td className="p-2">-2%</td>
            </tr>
            <tr>
            <td className="p-2">Avg. Time</td>
            <td className="p-2">2m 30s</td>
            <td className="p-2">+10%</td>
            </tr>
          </tbody>
          </table>
        </div>
        </details>
      </section>
      <section className="flex flex-col lg:flex-row gap-6">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 w-full lg:w-1/2">
        <h2 className="text-neutral-950 dark:text-neutral-50 font-semibold mb-2">Task Progress</h2>
        <Chart
          type="radar"
          series={[{ name: "Tasks", data: [70, 90, 50, 80] }]}
          width="100%"
          height={200}
          options={{
          chart: { toolbar: { show: false } },
          colors: [primary],
          }}
        />
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md p-4 w-full lg:w-1/2">
        <h2 className="text-neutral-950 dark:text-neutral-50 font-semibold mb-2">Latest Activities</h2>
        <ul className="text-neutral-950 dark:text-neutral-50 list-disc ml-5">
          <li>User John updated a record</li>
          <li>Marketing Team achieved 500+ leads</li>
          <li>Server downtime resolved</li>
        </ul>
        </div>
      </section>
      </main>
    </div>
  );
}
