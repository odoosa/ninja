odoo.define('ks_dashboard_ninja_list_tv.ks_dashboard_graph_preview', function (require) {
    "use strict";


    var KsGraphPreview = require('ks_dashboard_ninja_list.ks_dashboard_graph_preview');

    KsGraphPreview.KsGraphPreview.include({

        _render: function(){
            this.$el.empty();
            if (this.recordData.ks_dashboard_item_type !== 'ks_flower_view' && this.recordData.ks_dashboard_item_type !== 'ks_tile' && this.recordData.ks_dashboard_item_type !== 'ks_kpi' && this.recordData.ks_dashboard_item_type !== 'ks_list_view' && this.recordData.ks_dashboard_item_type !== 'ks_to_do' && this.recordData.ks_dashboard_item_type !== 'ks_funnel_chart' && this.recordData.ks_dashboard_item_type !== 'ks_radialBar_chart' && this.recordData.ks_dashboard_item_type !== 'ks_bullet_chart' && this.recordData.ks_dashboard_item_type !== 'ks_map_view') {
                if(this.recordData.ks_data_calculation_type !== "query"){
                    this._super.apply(this, arguments);
                }
                else if(this.recordData.ks_data_calculation_type === "query" && this.recordData.ks_query_result) {
                    if(this.recordData.ks_xlabels && this.recordData.ks_ylabels){
                            this._getChartData();
                    } else {
                        this.$el.append($('<div>').text("Please choose the X-labels and Y-labels"));
                    }
                } else {
                    this.$el.append($('<div>').text("Please run the appropriate Query"));
                }
            }
        },
    });

    return KsGraphPreview;
});