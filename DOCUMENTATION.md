# EcoBin Platform - User Documentation

## Overview

EcoBin is an AI-powered waste management platform designed to revolutionize waste disposal and recycling in India. The platform combines IoT technology, artificial intelligence, and community engagement to create a sustainable waste management ecosystem.

---

## Website Structure

### Public Pages (Available Without Login)

#### 1. **Homepage**
The landing page introduces users to the EcoBin platform and its mission.

**Features:**
- **Hero Section**: Main call-to-action with platform introduction
- **Statistics Section**: Displays key metrics about waste collection, CO₂ savings, and community impact
- **Problem Overview**: Explains the waste management challenges in India
- **How It Works**: Step-by-step visual guide to the platform's process

**Navigation Options:**
- Access to login/register
- Links to learn more about solutions
- Quick access to key features

#### 2. **About Page**
Provides comprehensive information about the EcoBin initiative.

**Content Includes:**
- **Problem Statement**: Statistics on India's waste management challenges
- **Mission & Vision**: Company goals and objectives
- **Timeline**: Platform development milestones
- **Key Achievements**: Current platform statistics and success metrics

#### 3. **Solution Page**
Detailed explanation of the platform's technological solutions.

**Solutions Covered:**
- **Smart Bins**: IoT-enabled waste containers with real-time monitoring
- **Optimized Pickup Routes**: AI-powered route optimization
- **AI Waste Sorting**: Machine learning-based waste categorization
- **Reward System**: Gamified eco-token incentives

**Impact Metrics**: Combined results showing reductions in collection time, segregation accuracy, and CO₂ savings

#### 4. **Learn Page**
Educational content about proper waste segregation.

**Content Includes:**
- **Waste Segregation Guide**: 
  - Wet Waste (Organic) - What belongs and how to handle
  - Dry Waste (Recyclable) - Categories and disposal methods
  - E-Waste - Electronic items and proper handling
  - Hazardous Waste - Safety considerations and disposal

- **Best Practices**:
  - Rinsing containers before disposal
  - Separating waste at source
  - Reducing and reusing principles

- **Green Pledge**: Users can commit to proper waste segregation by submitting their name and email

#### 5. **Contact Page**
Communication channel for user inquiries and feedback.

**Features:**
- **Contact Form**: Submit name, email, subject, and message
- **Contact Information**: 
  - Email address
  - Phone number
  - Physical address
- **Map Integration**: Location display (requires Google Maps API)
- **Testimonials**: Community success stories

---

### Authentication

#### Registration
New users can create accounts by providing:
- Name
- Email address
- Password
- User role selection (Resident, Business, or Admin)

#### Login
Users access their accounts using:
- Email address
- Password

**Account Types:**
- **Resident**: Standard user account for homeowners
- **Business**: Account for commercial establishments
- **Admin**: Administrative access for platform management

---

### Protected Pages (Require Login)

#### 6. **Dashboard**
The central hub for all user activities and data visualization.

**Overview Tab:**
- **Personal Statistics Cards**:
  - Total Pickups completed
  - Personal CO₂ saved
  - Eco Tokens balance
  - Participation count

- **Data Visualization**:
  - Waste Collection Chart (weekly trends)
  - CO₂ Reduction Chart (environmental impact)
  - Segregation Accuracy Chart (performance metrics)

- **Quick Actions**:
  - Schedule new pickup
  - View rewards
  - Access learning resources

**Bins Status Tab:**
- Real-time monitoring of all smart bins
- Information displayed for each bin:
  - Location and address
  - Fill level percentage
  - Waste type category
  - Operational status (Active, Full, or Maintenance)
  - Current weight and capacity
  - Last update timestamp

**Pickups Tab:**
- Complete list of user's scheduled and completed pickups
- Pickup details include:
  - Collection address
  - Scheduled date and time
  - Waste types being collected
  - Current status (Pending, Scheduled, In-Progress, Completed, Cancelled)
  - Truck assignment (when available)
  - Route information
  - Eco-tokens earned

**Reports Tab:**
- Comprehensive impact reports
- Total waste collected
- Total CO₂ saved
- Monthly collection trends

**Real-time Updates**: Bin status updates every 10 seconds automatically

---

#### 7. **Schedule Pickup Page**
Users can request waste collection from their location.

**Pickup Request Form Includes:**
- **Address Details**:
  - Street address
  - City
  - State
  - ZIP code

- **Scheduling**:
  - Preferred date
  - Preferred time slot

- **Waste Type Selection**:
  - Wet waste (Organic)
  - Dry waste (Recyclable)
  - E-waste
  - Hazardous waste
  - Mixed waste

**After Submission:**
- Confirmation screen with pickup details
- Pickup status: Pending confirmation
- Notification that route details will be provided
- Option to schedule another pickup or return to dashboard

**Features:**
- Route optimization visualization
- Automatic eco-token calculation based on waste type
- Pickup assignment to available trucks

---

#### 8. **Rewards Page**
Gamified reward system for sustainable practices.

**Eco Tokens Display:**
- Current token balance (large display)
- Pickups completed count
- Current leaderboard ranking

**Token Earning Methods:**
- Proper waste segregation: +20 tokens
- Regular pickups: +50 tokens
- E-waste disposal: +100 tokens
- Refer friends: +200 tokens

**Redeem Options:**
- **Shopping Vouchers**: 10% off at partner stores (500 tokens)
- **Tree Planting**: Donate to plant a tree (300 tokens)
- **Eco Products**: Redeem for sustainable products (1000 tokens)

**Leaderboard:**
- Rankings of all users
- Display shows:
  - Rank position
  - User name
  - Total eco-tokens
  - Pickups completed
- Highlights current user's position

**Features:**
- Real-time balance updates
- Token redemption with balance validation
- Competitive rankings to encourage participation

---

#### 9. **Chatbot Page**
AI-powered assistant for platform support.

**Functionality:**
- Interactive chat interface
- Real-time message exchange
- User and bot message differentiation

**Supported Topics:**
- **Pickup Scheduling**: Information about requesting waste collection
- **Rewards System**: Explanation of eco-tokens and redemption
- **Waste Segregation**: Guidelines for proper waste separation
- **Smart Bins**: Details about IoT-enabled containers
- **General Help**: Platform navigation and features

**Quick Actions:**
- Pre-defined question buttons for common queries:
  - "How to schedule pickup?"
  - "What are eco-tokens?"
  - "How to segregate waste?"

**User Experience:**
- Smooth scrolling to latest messages
- Visual distinction between user and bot messages
- Instant responses to common questions
- Natural language understanding

---

## Key Features Explained

### Smart Bins (IoT Integration)

**How It Works:**
1. Bins are equipped with sensors that monitor:
   - Fill level (0-100%)
   - Current weight
   - Waste type categorization
   - Operational status

2. Data is transmitted in real-time to the platform

3. Status Updates:
   - **Active**: Normal operation, accepting waste
   - **Full**: Reached capacity, needs collection
   - **Maintenance**: Temporarily unavailable for service

4. Benefits:
   - Proactive collection scheduling
   - Prevents overflow
   - Optimizes collection routes
   - Reduces operational costs

---

### Route Optimization

**Process:**
1. System analyzes all pending pickup requests
2. Considers factors:
   - Pickup locations
   - Traffic patterns
   - Time windows
   - Truck availability

3. Generates optimized routes that:
   - Minimize travel distance
   - Reduce fuel consumption
   - Maximize efficiency
   - Coordinate multiple pickups

4. Results:
   - 30% reduction in collection time
   - Lower operational costs
   - Reduced environmental impact

---

### AI Waste Sorting

**Technology:**
- Machine learning algorithms analyze waste at collection points
- Computer vision identifies waste types
- Automatic categorization ensures proper segregation

**Waste Categories:**
- Wet waste (organic/biodegradable)
- Dry waste (recyclable materials)
- E-waste (electronic devices)
- Hazardous waste (chemicals, medical waste)
- Mixed waste (requires separation)

**Benefits:**
- 87.5% segregation accuracy
- Reduced manual sorting
- Improved recycling rates
- Quality assurance checks

---

### Reward System (Eco-Tokens)

**Earning Mechanism:**
- Tokens are automatically awarded based on actions
- Different activities have different token values
- Rewards are credited immediately after verified actions

**Token Values:**
- Standard segregation: 20 tokens
- Regular pickup participation: 50 tokens
- E-waste disposal: 100 tokens
- Referrals: 200 tokens

**Redemption Process:**
1. User selects desired reward
2. System checks token balance
3. If sufficient, tokens are deducted
4. Reward is processed and delivered

**Gamification Elements:**
- Leaderboard rankings
- Achievement tracking
- Progress visualization
- Competitive community engagement

---

## User Workflows

### New User Journey

1. **Discovery**: User visits homepage and learns about platform
2. **Registration**: Creates account (Resident/Business)
3. **Education**: Visits Learn page to understand segregation
4. **First Pickup**: Schedules initial waste collection
5. **Earning Rewards**: Receives eco-tokens for participation
6. **Dashboard Monitoring**: Tracks personal impact and statistics
7. **Redemption**: Uses tokens for rewards or donations

### Regular User Workflow

1. **Monitor Dashboard**: Check personal statistics and bin status
2. **Schedule Pickup**: Request waste collection when needed
3. **Track Progress**: View pickup status and history
4. **Earn Tokens**: Accumulate rewards through participation
5. **Redeem Rewards**: Use tokens for desired benefits
6. **Community Engagement**: Compete on leaderboard

### Business User Workflow

1. **Account Setup**: Register as business entity
2. **Bulk Scheduling**: Schedule multiple pickups
3. **Track Operations**: Monitor collection efficiency
4. **Impact Reporting**: Review environmental metrics
5. **Compliance**: Ensure proper waste handling

---

## Data and Statistics

### Personal Metrics Tracked

- **Total Pickups**: Number of collections completed
- **CO₂ Saved**: Calculated environmental impact
- **Eco Tokens**: Current reward balance
- **Participation Count**: Engagement level
- **Segregation Accuracy**: Personal performance score

### Platform-Wide Metrics

- **Total Waste Collected**: Cumulative weight in kilograms
- **CO₂ Reduction**: Total environmental savings
- **Segregation Accuracy**: Overall platform performance (87.5%)
- **Active Bins**: Number of operational smart bins
- **Collection Trends**: Weekly and monthly patterns

### Visualizations

- **Charts**: Interactive graphs showing trends over time
- **Progress Bars**: Visual representation of fill levels and completion
- **Leaderboards**: Comparative rankings
- **Impact Reports**: Comprehensive environmental metrics

---

## System Status Indicators

### Bin Status

- **Active** (Green): Operating normally
- **Full** (Red): Requires immediate collection
- **Maintenance** (Yellow): Temporarily unavailable

### Pickup Status

- **Pending**: Request submitted, awaiting confirmation
- **Scheduled**: Confirmed and assigned to collection route
- **In-Progress**: Collection truck en route or at location
- **Completed**: Successfully collected
- **Cancelled**: Request cancelled by user or system

---

## Notifications and Alerts

**System-Generated Alerts:**
- Bin fill level warnings
- Pickup confirmation notifications
- Route assignment updates
- Token earning confirmations
- Leaderboard ranking changes

**User-Initiated Actions:**
- Pickup scheduling confirmations
- Reward redemption confirmations
- Form submission acknowledgments

---

## Accessibility Features

- **Dark Mode**: Full theme support for low-light environments
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Clear Navigation**: Intuitive menu structure
- **Visual Feedback**: Clear status indicators and confirmations
- **Educational Content**: Comprehensive guides and tips

---

## Security and Privacy

- **User Authentication**: Secure login system
- **Role-Based Access**: Different permissions for different user types
- **Data Protection**: Personal information secured
- **Transaction Security**: Safe token redemption process

---

## Support Resources

- **Chatbot**: 24/7 AI assistant for common questions
- **Contact Form**: Direct communication channel
- **Educational Content**: Learn page with comprehensive guides
- **Documentation**: Platform information and instructions

---

## Future Enhancements (Planned)

- Real-time IoT data streams
- Mobile application
- Advanced route optimization algorithms
- Payment gateway integration
- Expanded reward catalog
- Community forums
- Waste tracking analytics
- Carbon footprint calculator

---

## Best Practices for Users

1. **Proper Segregation**: Separate waste at source for maximum efficiency
2. **Regular Pickups**: Schedule collections before bins overflow
3. **Education**: Review segregation guidelines regularly
4. **Participation**: Engage consistently to maximize rewards
5. **Monitoring**: Check dashboard regularly for updates
6. **Community**: Encourage others to join and participate

---

## Troubleshooting

**Common Issues:**

- **Can't see bin status**: Refresh dashboard or check internet connection
- **Pickup not scheduled**: Verify all form fields are completed correctly
- **Tokens not updating**: Allow time for system processing
- **Route not showing**: Pickup may still be pending confirmation

**Solutions:**

- Use chatbot for immediate assistance
- Contact support through contact page
- Check dashboard for status updates
- Review pickup confirmation details

---

This documentation provides a comprehensive guide to using the EcoBin platform. For technical implementation details, refer to the codebase documentation.

