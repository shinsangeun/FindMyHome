export default {
  tasks: [
    {
      id: 0,
      type: "Meeting",
      title: "Meeting with Andrew Piker",
      time: "9:00"
    },
    {
      id: 1,
      type: "Call",
      title: "Call with HT Company",
      time: "12:00"
    },
    {
      id: 2,
      type: "Meeting",
      title: "Meeting with Zoe Alison",
      time: "14:00"
    },
    {
      id: 3,
      type: "Interview",
      title: "Interview with HR",
      time: "15:00"
    }
  ],
  bigStat: [
    {
      product: "국민임대",
      total: {
        monthly: 4232,
        weekly: 1465,
        daily: 199,
        percent: { value: 3.7, profit: false }
      },
      color: "primary",
      registrations: {
        monthly: { value: 830, profit: false },
        weekly: { value: 215, profit: true },
        daily: { value: 33, profit: true }
      },
      bounce: {
        monthly: { value: 4.5, profit: false },
        weekly: { value: 3, profit: true },
        daily: { value: 3.25, profit: true }
      }
    },
    {
      product: "공공임대",
      total: {
        monthly: 754,
        weekly: 180,
        daily: 27,
        percent: { value: 2.5, profit: true }
      },
      color: "warning",
      registrations: {
        monthly: { value: 32, profit: true },
        weekly: { value: 8, profit: true },
        daily: { value: 2, profit: false }
      },
      bounce: {
        monthly: { value: 2.5, profit: true },
        weekly: { value: 4, profit: false },
        daily: { value: 4.5, profit: false }
      }
    },
    {
      product: "매입임대",
      total: {
        monthly: 1025,
        weekly: 301,
        daily: 44,
        percent: { value: 3.1, profit: true }
      },
      color: "secondary",
      registrations: {
        monthly: { value: 230, profit: true },
        weekly: { value: 58, profit: false },
        daily: { value: 15, profit: false }
      },
      bounce: {
        monthly: { value: 21.5, profit: false },
        weekly: { value: 19.35, profit: false },
        daily: { value: 10.1, profit: true }
      }
    }
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation'
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company"
    },
    {
      id: 2,
      icon: "envelope",
      color: "danger",
      content: '4 <span className="fw-semi-bold">Private</span> Mails'
    },
    {
      id: 3,
      icon: "comment",
      color: "success",
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post'
    },
    {
      id: 4,
      icon: "cog",
      color: "light",
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app'
    },
    {
      id: 5,
      icon: "bell",
      color: "info",
      content:
        '15 <span className="fw-semi-bold">Notifications</span> from Social Apps'
    }
  ],
  // TODO api 테이블 데이터 추가

  table: [
    {
      id: 0,
      area: "강원도 강릉시",
      type: "국민임대",
      name: "강릉 예성그린2차(국민)",
      price: "$25 224.2",
      closeDate: "11 May 2017",
      status: "Progress"
    },
    {
      id: 1,
      area: "강원도 강릉시",
      type: "국민임대",
      name: "서울양원 S1블록 행복주택 입주자 모집",
      price: "$1 254.2",
      closeDate: "4 Jun 2017",
      status: "Progress"
    },
    {
      id: 2,
      area: "강원도 강릉시",
      type: "국민임대",
      name: "강릉 예성그린3차(국민)",
      price: "$1 570.0",
      closeDate: "27 Aug 2017",
      status: "Receiving"
    },
    {
      id: 3,
      area: "강원도 강릉시",
      type: "국민임대",
      name: "강릉 예성그린1차(국민)",
      price: "$5 224.5",
      closeDate: "19 Feb 2018",
      status: "Progress"
    },
    {
      id: 4,
      area: "강원도 강릉시",
      type: "국민임대",
      name: "강릉 예성그린5차(국민)",
      price: "$43 594.7",
      closeDate: "1 Mar 2018",
      status: "Progress"
    }
  ]
};
