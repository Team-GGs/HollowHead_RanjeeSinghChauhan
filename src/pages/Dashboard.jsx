import { Users, DollarSign, Calendar, TrendingUp, Ticket } from 'lucide-react';
import { mockEvents } from '../data/mockData';

function Dashboard() {
  const organizerEvents = mockEvents; // using all for demo
  
  return (
    <div className="container" style={{ paddingTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Organizer Dashboard</h1>
        <button className="btn btn-primary">Create Event +</button>
      </div>

      {/* Stats Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {[
          { label: 'Total Revenue', value: '₹1,24,000', icon: DollarSign, color: 'var(--primary-color)' },
          { label: 'Tickets Sold', value: '3,450', icon: Ticket, color: 'var(--success-color)' },
          { label: 'Upcoming Events', value: '4', icon: Calendar, color: 'var(--warning-color)' },
          { label: 'Profile Views', value: '12.5k', icon: TrendingUp, color: 'var(--text-main)' },
        ].map((stat, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-full)', display: 'flex' }}>
               <stat.icon color={stat.color} size={24} />
            </div>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{stat.label}</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Event List */}
      <h3>Your Active Events</h3>
      <div style={{ marginTop: '1rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
              <th style={{ padding: '1rem' }}>Event Name</th>
              <th style={{ padding: '1rem' }}>Date</th>
              <th style={{ padding: '1rem' }}>Tickets Sold</th>
              <th style={{ padding: '1rem' }}>Status</th>
              <th style={{ padding: '1rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {organizerEvents.map((e, index) => (
              <tr key={e.id} style={{ borderBottom: index < organizerEvents.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                <td style={{ padding: '1rem', fontWeight: 500 }}>{e.title}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{e.date}</td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '100px', height: '6px', background: 'var(--bg-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${((e.totalSpots - e.spotsLeft) / e.totalSpots) * 100}%`, height: '100%', background: 'var(--success-color)' }}></div>
                    </div>
                    <span style={{ fontSize: '0.875rem' }}>{e.totalSpots - e.spotsLeft}/{e.totalSpots}</span>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ padding: '0.25rem 0.5rem', background: '#dcfce7', color: '#166534', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600 }}>Active</span>
                </td>
                <td style={{ padding: '1rem' }}>
                  <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
