import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Danh sách luồng tích hợp';
  panels = [
    {
      title: 'Đơn hàng',
      links: [
        // {
        //   name: 'Cập nhật trạng thái đơn hàng',
        //   routerLink: '/orders/table-update-order-status',
        // },
      ],
    },
    {
      title: 'Sản phẩm',
      links: [
        {
          name: 'Kích hoạt sản phẩm',
          routerLink: '/products/table-receive-pending-product',
        }
      ],
    },
    {
      title: 'Chương trình khuyến mãi',
      links: [],
    },
    {
      title: 'Khách hàng',
      links: [],
    },
  ];

  sortPanelsByTitle() {
    this.panels.sort((a, b) => {
      if (a.links.length < b.links.length) {
        return 1;
      } else if (a.links.length > b.links.length) {
        return -1;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }

  sortLinksByName() {
    this.panels.forEach((panel) => {
      panel.links.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  ngOnInit() {
    this.sortPanelsByTitle();
    this.sortLinksByName();
  }
}
