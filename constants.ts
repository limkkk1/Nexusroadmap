import { RoadmapItemData } from './types';

// Updated roadmap data based on the latest Nexus roadmap
export const INITIAL_ROADMAP_DATA: RoadmapItemData[] = [
  {
    id: '1',
    date: '2026年 Q1',
    title: 'Nexus 交易所候补名单开放',
    description:
      'Nexus 交易所候补名单正式开放，允许早期用户与合作伙伴在正式上线前表达兴趣，并参与产品塑造。',
    points: [
      '早期用户与生态合作伙伴注册候补名单',
      '重点进行用户引导与体验反馈',
      '为交易所主网启动做准备'
    ]
  },
  {
    id: '2',
    date: '2026年 Q1',
    title: '社区创世活动',
    description:
      '启动 Nexus 社区创世活动，将验证者、运营方及早期参与者聚集到线上，推动网络从开发阶段走向社区驱动。',
    points: [
      '验证者与节点运营者加入网络',
      '早期生态参与者协同共建',
      '标志 Nexus 网络进入社区启动阶段'
    ]
  },
  {
    id: '3',
    date: '2026年 Q2',
    title: 'Layer 1 主网 EVM 上线',
    description:
      'Nexus Layer 1 主网正式上线，支持生产级别的安全结算与执行，为真实经济活动提供基础设施。',
    points: [
      'EVM 在主网上线并投入生产使用',
      '支持协议级金融与链上执行',
      '为后续交易所与金融应用奠定基础'
    ]
  },
  {
    id: '4',
    date: '2026年 Q3',
    title: '交易所主网启动',
    description:
      'Nexus 交易所在主网上线，支持实时交易与链上金融活动，标志 Nexus 成为可运行的金融网络。',
    points: [
      '支持实时交易与链上结算',
      '交易所与 Layer 1 深度集成',
      'Nexus 正式进入金融网络运行阶段'
    ]
  },
  {
    id: '5',
    date: '持续进行',
    title: '构建可验证金融的核心引擎',
    description:
      '持续构建用于可验证金融的核心基础设施，涵盖协议、交易系统与密码学执行。',
    points: [
      '持续优化协议设计与系统安全',
      '扩展交易与金融基础设施能力',
      '确保网络具备可扩展性与金融级可靠性'
    ]
  }
];
