import React from 'react'
import {Card} from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import {lusitana} from '@/app/ui/fonts';
import {fetchRevenue, fetchLatestInvoices, fetchCardData} from '@/app/lib/data';

async function dahboard() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices}= await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid gap-6 sm:grid-close-2 lg:grid-close-4'>
         <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
       <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
       <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
       <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />

      </div>
      <div className='mt-6 grid grid-close-1 md:grid-close-4 lg:grid-close-8'>
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  )
}

export default dahboard